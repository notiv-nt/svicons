/** @typedef {typeof __propDef.props}  ShareProps */
/** @typedef {typeof __propDef.events}  ShareEvents */
/** @typedef {typeof __propDef.slots}  ShareSlots */
export default class Share extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ShareProps = typeof __propDef.props
export type ShareEvents = typeof __propDef.events
export type ShareSlots = typeof __propDef.slots
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
