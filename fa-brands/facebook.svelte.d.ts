/** @typedef {typeof __propDef.props}  FacebookProps */
/** @typedef {typeof __propDef.events}  FacebookEvents */
/** @typedef {typeof __propDef.slots}  FacebookSlots */
export default class Facebook extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FacebookProps = typeof __propDef.props
export type FacebookEvents = typeof __propDef.events
export type FacebookSlots = typeof __propDef.slots
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
