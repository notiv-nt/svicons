/** @typedef {typeof __propDef.props}  FirefoxProps */
/** @typedef {typeof __propDef.events}  FirefoxEvents */
/** @typedef {typeof __propDef.slots}  FirefoxSlots */
export default class Firefox extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FirefoxProps = typeof __propDef.props
export type FirefoxEvents = typeof __propDef.events
export type FirefoxSlots = typeof __propDef.slots
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
