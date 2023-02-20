/** @typedef {typeof __propDef.props}  BattleNetProps */
/** @typedef {typeof __propDef.events}  BattleNetEvents */
/** @typedef {typeof __propDef.slots}  BattleNetSlots */
export default class BattleNet extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BattleNetProps = typeof __propDef.props
export type BattleNetEvents = typeof __propDef.events
export type BattleNetSlots = typeof __propDef.slots
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
