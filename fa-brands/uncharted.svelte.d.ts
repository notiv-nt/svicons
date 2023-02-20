/** @typedef {typeof __propDef.props}  UnchartedProps */
/** @typedef {typeof __propDef.events}  UnchartedEvents */
/** @typedef {typeof __propDef.slots}  UnchartedSlots */
export default class Uncharted extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UnchartedProps = typeof __propDef.props
export type UnchartedEvents = typeof __propDef.events
export type UnchartedSlots = typeof __propDef.slots
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
