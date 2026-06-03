import '@testing-library/jest-dom'

// Node 26 exposes a built-in localStorage global (undefined without --localstorage-file)
// which prevents vitest's jsdom environment from populating the localStorage global.
// Get jsdom's Storage from the prototype chain and expose it as the bare global.
if (typeof window !== 'undefined') {
  const jsdomLocalStorage = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(window),
    'localStorage',
  )?.get?.call(window)
    ?? (window as any).jsdom?.window?.localStorage

  if (jsdomLocalStorage && typeof localStorage === 'undefined') {
    Object.defineProperty(globalThis, 'localStorage', {
      value: jsdomLocalStorage,
      writable: true,
      configurable: true,
    })
  }
}
