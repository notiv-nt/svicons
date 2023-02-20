/** @typedef {typeof __propDef.props}  OldRepublicProps */
/** @typedef {typeof __propDef.events}  OldRepublicEvents */
/** @typedef {typeof __propDef.slots}  OldRepublicSlots */
export default class OldRepublic extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OldRepublicProps = typeof __propDef.props
export type OldRepublicEvents = typeof __propDef.events
export type OldRepublicSlots = typeof __propDef.slots
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
