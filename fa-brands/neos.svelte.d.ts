/** @typedef {typeof __propDef.props}  NeosProps */
/** @typedef {typeof __propDef.events}  NeosEvents */
/** @typedef {typeof __propDef.slots}  NeosSlots */
export default class Neos extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NeosProps = typeof __propDef.props
export type NeosEvents = typeof __propDef.events
export type NeosSlots = typeof __propDef.slots
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
