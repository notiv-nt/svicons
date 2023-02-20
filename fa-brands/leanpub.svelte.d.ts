/** @typedef {typeof __propDef.props}  LeanpubProps */
/** @typedef {typeof __propDef.events}  LeanpubEvents */
/** @typedef {typeof __propDef.slots}  LeanpubSlots */
export default class Leanpub extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LeanpubProps = typeof __propDef.props
export type LeanpubEvents = typeof __propDef.events
export type LeanpubSlots = typeof __propDef.slots
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
