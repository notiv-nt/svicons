/** @typedef {typeof __propDef.props}  NodeJsProps */
/** @typedef {typeof __propDef.events}  NodeJsEvents */
/** @typedef {typeof __propDef.slots}  NodeJsSlots */
export default class NodeJs extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type NodeJsProps = typeof __propDef.props
export type NodeJsEvents = typeof __propDef.events
export type NodeJsSlots = typeof __propDef.slots
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
