import serviceInterface, { httpMethods } from './service'

export const databases: Record<string, string> = {
    contacts: process.env.NOTION_DATABASE_CONTACTS!,
    tasks: process.env.NOTION_DATABASE_TASKS!,
}

export default class NotionService implements serviceInterface {
    baseUrl: string = 'https://api.notion.com/v1/pages'
    token: string

    constructor(token: string) {
        this.token = token
    }

    async fetch(method: httpMethods, route: string, payload?: any): Promise<any> {
        const headers = {
            'Authorization': 'Bearer ' + this.token,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        }

        const response = await fetch(`${this.baseUrl}${route}`, {
            method,
            headers,
            body: JSON.stringify(payload)
        })

        return response.json()
    }

    public formatContactPayload(name: string, email: string, content: string): any {
        const parent = {
            database_id: databases.contacts,
        }

        const properties = {
            Name: {
                title: [
                    {
                        type: 'text',
                        text: { content: name }
                    }
                ],
            },
            Email: { email },
        }

        const children = [
            {
                'object': 'block',
                'type': 'paragraph',
                'paragraph': {
                    'rich_text': [
                        {
                            'text': {
                                content
                            },
                        },
                    ],
                },
            },
        ]
        
        return {
            parent,
            properties,
            children,
        }
    }
}