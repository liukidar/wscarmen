export function API(path) {
  function isIterable(obj) {
    if (obj == null) {
      return false
    }
    return Array.isArray(obj) || typeof obj === 'object'
  }

  function request(method, target, data, callback, headers) {
    let ajaxRequest = new XMLHttpRequest()

    let payload = null
    switch (method) {
      case 'POST':
        payload = new FormData()
        for (let key in data) {
          if (isIterable(data[key])) {
            for (let el in data[key]) {
              payload.append(key + '[' + el + ']', data[key][el])
            }
          } else {
            payload.append(key, data[key])
          }
        }
        ajaxRequest.open(method, target)

        break

      case 'GET':
        // Serialize data object into URL query, nested objeccts are not supported by choiche to avoid bad design descisions (it's a simple get request!) and recursive functions
        let query = []
        for (let property in data) {
          if (data.hasOwnProperty(property)) {
            if (Array.isArray(data[property])) {
              for (let value of data[property]) {
                query.push(encodeURIComponent(property) + '[]=' + encodeURIComponent(value))
              }
            } else {
              query.push(encodeURIComponent(property) + '=' + encodeURIComponent(data[property]))
            }
          }
        }
        target += '?' + query.join('&')
        ajaxRequest.open(method, target)

        break
      case 'PUT':
      case 'DELETE':
        ajaxRequest.open(method, target)
        ajaxRequest.setRequestHeader('Content-Type', 'application/json')
        payload = JSON.stringify(data)

        break

      default:
        break
    }

    for (let header in headers.data) {
      ajaxRequest.setRequestHeader(header, headers.data[header])
    }
    ajaxRequest.setRequestHeader('Cache-Control', 'no-cache')
    ajaxRequest.onreadystatechange = function() {
      if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
        let r = JSON.parse(ajaxRequest.responseText)
        if (r.headers) {
          for (let header in r.headers) {
            headers.set(header, r.headers[header])
          }
        }

        callback(r)
      }
    }
    ajaxRequest.send(payload)
  }

  return {
    headers: {
      data: {},
      set: function(name, data) { this.data[name] = data }
    },
    request: function(method, target, data, callback) { request(method, path + '/' + target + '.php', data, callback, this.headers) }
  }
}
