/** @typedef {typeof __propDef.props}  OctopusDeployProps */
/** @typedef {typeof __propDef.events}  OctopusDeployEvents */
/** @typedef {typeof __propDef.slots}  OctopusDeploySlots */
export default class OctopusDeploy extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OctopusDeployProps = typeof __propDef.props
export type OctopusDeployEvents = typeof __propDef.events
export type OctopusDeploySlots = typeof __propDef.slots
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
