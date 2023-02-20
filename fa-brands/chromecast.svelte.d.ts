/** @typedef {typeof __propDef.props}  ChromecastProps */
/** @typedef {typeof __propDef.events}  ChromecastEvents */
/** @typedef {typeof __propDef.slots}  ChromecastSlots */
export default class Chromecast extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ChromecastProps = typeof __propDef.props
export type ChromecastEvents = typeof __propDef.events
export type ChromecastSlots = typeof __propDef.slots
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
