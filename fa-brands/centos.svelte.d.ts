/** @typedef {typeof __propDef.props}  CentosProps */
/** @typedef {typeof __propDef.events}  CentosEvents */
/** @typedef {typeof __propDef.slots}  CentosSlots */
export default class Centos extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CentosProps = typeof __propDef.props
export type CentosEvents = typeof __propDef.events
export type CentosSlots = typeof __propDef.slots
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
