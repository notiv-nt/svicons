/** @typedef {typeof __propDef.props}  NodeProps */
/** @typedef {typeof __propDef.events}  NodeEvents */
/** @typedef {typeof __propDef.slots}  NodeSlots */
export default class Node extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NodeProps = typeof __propDef.props
export type NodeEvents = typeof __propDef.events
export type NodeSlots = typeof __propDef.slots
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
