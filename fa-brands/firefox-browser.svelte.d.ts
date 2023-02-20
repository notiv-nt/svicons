/** @typedef {typeof __propDef.props}  FirefoxBrowserProps */
/** @typedef {typeof __propDef.events}  FirefoxBrowserEvents */
/** @typedef {typeof __propDef.slots}  FirefoxBrowserSlots */
export default class FirefoxBrowser extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FirefoxBrowserProps = typeof __propDef.props
export type FirefoxBrowserEvents = typeof __propDef.events
export type FirefoxBrowserSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
