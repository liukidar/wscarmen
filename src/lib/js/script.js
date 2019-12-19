// eslint-disable-next-line
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max)
}

export function captureMouse(callback, end) {
  let onmove = (e) => { callback(e) }
  let onend = () => {
    window.removeEventListener('mousemove', onmove)
    window.removeEventListener('mouseup', onend)
    if (end) end()
  }
  window.addEventListener('mousemove', onmove)
  window.addEventListener('mouseup', onend)
}

export function listFiles(ctx) {
  return ctx.keys().map((el) => { return el.substr(2) })
}

export function offsetTop(_el, _target) {
  let o = 0

  while (_el && _el !== _target && _el !== document.body) {
    o += _el.offsetTop
    _el = _el.offsetParent
  }

  return o
}

export function render(_fn, _exit, _callback) {
  let i = 0

  let frame = () => {
    _fn()

    if (_exit()) {
      _callback.fn()
    } else {
      if (_callback) {
        i++
        if ((i % _callback.i) === 0) {
          _callback.fn(i)
          if (i > 256) i = 0
        }
      }
      window.requestAnimationFrame(frame)
    }
  }

  return frame
}

export function throttle(_fn, interval) {
  let lastCall = 0
  let throttled = null

  return (i) => {
    let now = performance.now()
    if (now - lastCall >= interval) {
      _fn(i)
      lastCall = now
    } else {
      clearTimeout(throttled)
      throttled = setTimeout(_fn, interval)
    }
  }
}

export function getScrollbarWidth() {
  var outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps

  document.body.appendChild(outer)

  var widthNoScroll = outer.offsetWidth
  // force scrollbars
  outer.style.overflow = 'scroll'

  // add innerdiv
  var inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  var widthWithScroll = inner.offsetWidth

  // remove divs
  outer.parentNode.removeChild(outer)

  return widthNoScroll - widthWithScroll
}

function isIterable(obj) {
  if (obj == null) {
    return false
  }
  return typeof obj[Symbol.iterator] === 'function'
}

export function APIRequest(method, target, data, callback) {
  let ajaxRequest = new XMLHttpRequest()
  ajaxRequest.open(method, target)
  ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
      console.log(ajaxRequest.responseText)
      let r = JSON.parse(ajaxRequest.responseText)
      callback(r)
    }
  }

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

      break

    case 'GET':
    case 'PUT':
    case 'DELETE':
      ajaxRequest.setRequestHeader('Content-Type', 'application/json')
      payload = JSON.stringify(data)

      break

    default:
      break
  }
  ajaxRequest.send(payload)
}

export function debounce(func, wait, immediate) {
  let timeout

  return function executedFunction() {
    var context = this
    var args = arguments

    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    var callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}
