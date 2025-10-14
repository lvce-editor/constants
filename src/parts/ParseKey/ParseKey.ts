import * as KeyModifier from '../KeyModifier/KeyModifier.ts'
import type { ParsedKey } from '../ParsedKey/ParsedKey.ts'
import * as GetKeyCodeString from '../GetKeyCodeString/GetKeyCodeString.ts'

export const parseKey = (rawKey: number): ParsedKey => {
  const isCtrl = Boolean(rawKey & KeyModifier.CtrlCmd)
  const isShift = Boolean(rawKey & KeyModifier.Shift)
  const keyCode = rawKey & 0x00_00_00_ff
  const key = GetKeyCodeString.getKeyCodeString(keyCode)
  return {
    key,
    isCtrl,
    isShift,
  }
}
