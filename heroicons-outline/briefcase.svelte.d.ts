/** @typedef {typeof __propDef.props}  BriefcaseProps */
/** @typedef {typeof __propDef.events}  BriefcaseEvents */
/** @typedef {typeof __propDef.slots}  BriefcaseSlots */
export default class Briefcase extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BriefcaseProps = typeof __propDef.props
export type BriefcaseEvents = typeof __propDef.events
export type BriefcaseSlots = typeof __propDef.slots
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
