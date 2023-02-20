/** @typedef {typeof __propDef.props}  OfficeBuildingProps */
/** @typedef {typeof __propDef.events}  OfficeBuildingEvents */
/** @typedef {typeof __propDef.slots}  OfficeBuildingSlots */
export default class OfficeBuilding extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OfficeBuildingProps = typeof __propDef.props
export type OfficeBuildingEvents = typeof __propDef.events
export type OfficeBuildingSlots = typeof __propDef.slots
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
