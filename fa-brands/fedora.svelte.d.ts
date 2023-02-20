/** @typedef {typeof __propDef.props}  FedoraProps */
/** @typedef {typeof __propDef.events}  FedoraEvents */
/** @typedef {typeof __propDef.slots}  FedoraSlots */
export default class Fedora extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FedoraProps = typeof __propDef.props
export type FedoraEvents = typeof __propDef.events
export type FedoraSlots = typeof __propDef.slots
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
