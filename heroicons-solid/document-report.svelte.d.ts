/** @typedef {typeof __propDef.props}  DocumentReportProps */
/** @typedef {typeof __propDef.events}  DocumentReportEvents */
/** @typedef {typeof __propDef.slots}  DocumentReportSlots */
export default class DocumentReport extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DocumentReportProps = typeof __propDef.props
export type DocumentReportEvents = typeof __propDef.events
export type DocumentReportSlots = typeof __propDef.slots
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
