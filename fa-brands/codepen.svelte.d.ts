/** @typedef {typeof __propDef.props}  CodepenProps */
/** @typedef {typeof __propDef.events}  CodepenEvents */
/** @typedef {typeof __propDef.slots}  CodepenSlots */
export default class Codepen extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CodepenProps = typeof __propDef.props
export type CodepenEvents = typeof __propDef.events
export type CodepenSlots = typeof __propDef.slots
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
