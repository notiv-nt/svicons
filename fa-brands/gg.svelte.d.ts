/** @typedef {typeof __propDef.props}  GgProps */
/** @typedef {typeof __propDef.events}  GgEvents */
/** @typedef {typeof __propDef.slots}  GgSlots */
export default class Gg extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GgProps = typeof __propDef.props
export type GgEvents = typeof __propDef.events
export type GgSlots = typeof __propDef.slots
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
