/** @typedef {typeof __propDef.props}  OrcidProps */
/** @typedef {typeof __propDef.events}  OrcidEvents */
/** @typedef {typeof __propDef.slots}  OrcidSlots */
export default class Orcid extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OrcidProps = typeof __propDef.props
export type OrcidEvents = typeof __propDef.events
export type OrcidSlots = typeof __propDef.slots
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
