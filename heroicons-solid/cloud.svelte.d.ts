/** @typedef {typeof __propDef.props}  CloudProps */
/** @typedef {typeof __propDef.events}  CloudEvents */
/** @typedef {typeof __propDef.slots}  CloudSlots */
export default class Cloud extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CloudProps = typeof __propDef.props
export type CloudEvents = typeof __propDef.events
export type CloudSlots = typeof __propDef.slots
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
