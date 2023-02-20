/** @typedef {typeof __propDef.props}  ChartPieProps */
/** @typedef {typeof __propDef.events}  ChartPieEvents */
/** @typedef {typeof __propDef.slots}  ChartPieSlots */
export default class ChartPie extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ChartPieProps = typeof __propDef.props
export type ChartPieEvents = typeof __propDef.events
export type ChartPieSlots = typeof __propDef.slots
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
