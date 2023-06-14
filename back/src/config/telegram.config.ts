import { Telegram } from 'src/telegram/telegram.interface'

export const getTelegramConfig = (): Telegram => ({
	// https://api.telegram.org/bot6211422365:AAHHE6P9UziVu73ZJQRrztHPjKeBvhoEXEw/getUpdates - for get chatId
	chatId: '543539209',
	token: '6211422365:AAHHE6P9UziVu73ZJQRrztHPjKeBvhoEXEw',
})
