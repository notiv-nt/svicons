/** @typedef {typeof __propDef.props}  HubspotProps */
/** @typedef {typeof __propDef.events}  HubspotEvents */
/** @typedef {typeof __propDef.slots}  HubspotSlots */
export default class Hubspot extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HubspotProps = typeof __propDef.props
export type HubspotEvents = typeof __propDef.events
export type HubspotSlots = typeof __propDef.slots
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
