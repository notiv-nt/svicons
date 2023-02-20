/** @typedef {typeof __propDef.props}  CloudsmithProps */
/** @typedef {typeof __propDef.events}  CloudsmithEvents */
/** @typedef {typeof __propDef.slots}  CloudsmithSlots */
export default class Cloudsmith extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CloudsmithProps = typeof __propDef.props
export type CloudsmithEvents = typeof __propDef.events
export type CloudsmithSlots = typeof __propDef.slots
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
