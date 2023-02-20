/** @typedef {typeof __propDef.props}  PhpProps */
/** @typedef {typeof __propDef.events}  PhpEvents */
/** @typedef {typeof __propDef.slots}  PhpSlots */
export default class Php extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhpProps = typeof __propDef.props
export type PhpEvents = typeof __propDef.events
export type PhpSlots = typeof __propDef.slots
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
