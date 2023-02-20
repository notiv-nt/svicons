/** @typedef {typeof __propDef.props}  OptinMonsterProps */
/** @typedef {typeof __propDef.events}  OptinMonsterEvents */
/** @typedef {typeof __propDef.slots}  OptinMonsterSlots */
export default class OptinMonster extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OptinMonsterProps = typeof __propDef.props
export type OptinMonsterEvents = typeof __propDef.events
export type OptinMonsterSlots = typeof __propDef.slots
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
