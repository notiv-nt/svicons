/** @typedef {typeof __propDef.props}  HashnodeProps */
/** @typedef {typeof __propDef.events}  HashnodeEvents */
/** @typedef {typeof __propDef.slots}  HashnodeSlots */
export default class Hashnode extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HashnodeProps = typeof __propDef.props
export type HashnodeEvents = typeof __propDef.events
export type HashnodeSlots = typeof __propDef.slots
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
