/** @typedef {typeof __propDef.props}  AdversalProps */
/** @typedef {typeof __propDef.events}  AdversalEvents */
/** @typedef {typeof __propDef.slots}  AdversalSlots */
export default class Adversal extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AdversalProps = typeof __propDef.props
export type AdversalEvents = typeof __propDef.events
export type AdversalSlots = typeof __propDef.slots
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
