/** @typedef {typeof __propDef.props}  ResolvingProps */
/** @typedef {typeof __propDef.events}  ResolvingEvents */
/** @typedef {typeof __propDef.slots}  ResolvingSlots */
export default class Resolving extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ResolvingProps = typeof __propDef.props
export type ResolvingEvents = typeof __propDef.events
export type ResolvingSlots = typeof __propDef.slots
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
