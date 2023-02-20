/** @typedef {typeof __propDef.props}  EarlybirdsProps */
/** @typedef {typeof __propDef.events}  EarlybirdsEvents */
/** @typedef {typeof __propDef.slots}  EarlybirdsSlots */
export default class Earlybirds extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type EarlybirdsProps = typeof __propDef.props
export type EarlybirdsEvents = typeof __propDef.events
export type EarlybirdsSlots = typeof __propDef.slots
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
