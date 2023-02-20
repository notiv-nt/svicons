/** @typedef {typeof __propDef.props}  SourcetreeProps */
/** @typedef {typeof __propDef.events}  SourcetreeEvents */
/** @typedef {typeof __propDef.slots}  SourcetreeSlots */
export default class Sourcetree extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SourcetreeProps = typeof __propDef.props
export type SourcetreeEvents = typeof __propDef.events
export type SourcetreeSlots = typeof __propDef.slots
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
