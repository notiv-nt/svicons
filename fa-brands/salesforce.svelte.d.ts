/** @typedef {typeof __propDef.props}  SalesforceProps */
/** @typedef {typeof __propDef.events}  SalesforceEvents */
/** @typedef {typeof __propDef.slots}  SalesforceSlots */
export default class Salesforce extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SalesforceProps = typeof __propDef.props
export type SalesforceEvents = typeof __propDef.events
export type SalesforceSlots = typeof __propDef.slots
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
