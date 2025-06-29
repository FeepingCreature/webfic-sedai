import { t } from "../strings"

export function LegendFooter() {
  return (
    <div className="flex w-full items-center justify-center ml-2 mt-1 p-2 text-xs">
      {["completed","inProgress","dropped","none"].map((key, i) => {
        const color = ["bg-green-500","bg-yellow-500","bg-red-500","border border-gray-400"][i]
        return (
          <span key={key} className="flex items-center space-x-1 mr-6">
            <span className={`h-3 w-3 ${color} rounded-full`} />
            <span>{t(key as any)}</span>
          </span>
        )
      })}
    </div>
  )
}
