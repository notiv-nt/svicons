/** @typedef {typeof __propDef.props}  WatchmanMonitoringProps */
/** @typedef {typeof __propDef.events}  WatchmanMonitoringEvents */
/** @typedef {typeof __propDef.slots}  WatchmanMonitoringSlots */
export default class WatchmanMonitoring extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WatchmanMonitoringProps = typeof __propDef.props
export type WatchmanMonitoringEvents = typeof __propDef.events
export type WatchmanMonitoringSlots = typeof __propDef.slots
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
