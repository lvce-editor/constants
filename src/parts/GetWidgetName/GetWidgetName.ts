import * as WidgetId from '../WidgetId/WidgetId.ts'
import * as WidgetName from '../WidgetName/WidgetName.ts'

export const getWidgetName = (widgetId: number): string => {
  switch (widgetId) {
    case WidgetId.Find:
      return WidgetName.FindWidget
    case WidgetId.ColorPicker:
      return WidgetName.ColorPicker
    case WidgetId.Completion:
      return WidgetName.EditorCompletion
    case WidgetId.SourceAction:
      return WidgetName.EditorSourceActions
    default:
      return ''
  }
}
