interface IRootState {
	readonly merchants: IMerchants
	readonly auth: IAuth
}

interface IMerchants {
	readonly merchants: ReadonlyArray<IMerchant>
	readonly merchantsGetRequest: string
	readonly merchantsGetError: string
}

interface IMerchant {
	readonly id: string
	readonly name: string
}

interface IAuth {
	readonly user: IUser
	readonly authToken: string
	readonly loginRequest: string
	readonly loginError: string
}

interface IUser {
	readonly id: string
	readonly name: string
}

interface IReactComponentsRootState {
	readonly alert: IAlert
}

interface IAlert {
	readonly alertState: boolean
	readonly message?: string
	readonly alertLevel?: AlertLevel
}

declare enum AlertLevel {
	Success = "Success",
	Warning = "Warning",
	Error = "Error"
}

declare enum WeekDays {
	Monday = "Monday",
	Sunday = "Sunday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday"
}

declare enum InputTypes {
	Select = "select",
	Textarea = "textarea",
	Switch = "switch",
	Editor = "editor",
	Checkbox = "checkbox",
	Radio = "radio",
	RadioGroup = "radioGroup",
	File = "file",
	Calender = "calender",
	TimePicker = "timepicker",
	ColorPicker = "colorpicker"
}

interface IStartEndOfWeek {
	readonly startDate: string
	readonly endDate: string
}

interface IThemeColors {
	readonly primary: string
	readonly primaryLight: string
	readonly primaryDark: string
	readonly secondary: string
	readonly secondaryDark: string
	readonly secondaryLight: string
	readonly accent: string
	readonly accentLight: string
	readonly accentDark: string
	readonly background: string
	readonly profileBackground: string
	readonly danger: string
	readonly gray: string
	readonly warning: string
	readonly info: string
	readonly success: string
	readonly icons: string
}

/* ------------------------------------------------- */
// Actions Types
/* ------------------------------------------------- */
interface IAction<P, T> {
	readonly payload?: P
	readonly type: T
}

/* ------------------------------------------------- */
// API dup cause can't import in global.d.ts
/* ------------------------------------------------- */
declare enum API {
	NOT_REQUESTED = "API_NOT_REQUESTED",
	REQUEST_PENDING = "API_REQUEST_PENDING",
	REQUEST_SUCCESS = "API_REQUEST_SUCCESS",
	REQUEST_ERROR = "API_REQUEST_ERROR"
}

/* ------------------------------------------------- */
// Useful Types
/* ------------------------------------------------- */

interface IDefaultDataType {
	readonly id: number
	readonly name: string
}
interface IListPayload<T> {
	readonly limit?: number
	readonly offset?: number
	readonly sort?: string
	readonly orderBy?: keyof T
	readonly orderType?: "asc" | "desc"
}

interface IBasicTableData {
	readonly id: {
		readonly component: React.ReactText
		readonly value: React.ReactText
	}
}

type ITableData<T> = {
	readonly [K in keyof T]: {
		readonly component: T[K] | React.ReactNode
		readonly value: T[K]
	}
} &
	IBasicTableData

type Mutable<T> = { -readonly [K in keyof T]: T[K] }

interface IDropDownData<T = number | string> {
	readonly label: string
	readonly value: T
}

declare enum SuperPrivileges {
	None = "none",
	Read = "read",
	Write = "write"
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// tslint:disable-next-line:max-file-line-count
