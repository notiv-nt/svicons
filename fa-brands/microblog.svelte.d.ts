/** @typedef {typeof __propDef.props}  MicroblogProps */
/** @typedef {typeof __propDef.events}  MicroblogEvents */
/** @typedef {typeof __propDef.slots}  MicroblogSlots */
export default class Microblog extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MicroblogProps = typeof __propDef.props
export type MicroblogEvents = typeof __propDef.events
export type MicroblogSlots = typeof __propDef.slots
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
