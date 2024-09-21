import { ConcludeTask, Task } from "@/@types";

export class TaskApi {
    async createTask({ title, completed }: Task) {
        const response = await fetch(
            "https://leg-back.vercel.app/api/v1/create-task",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    completed: completed,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    }

    async getTaskByAuthor() {
        const response = await fetch(
            "https://leg-back.vercel.app/api/v1/get-all-task",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    }

    async del(taskId: number) {
        const response = await fetch(
            `https://leg-back.vercel.app/api/v1/delete-task-by-id/${taskId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response;
    }

    async conclude({ id, title, completed }: ConcludeTask) {
        const response = await fetch(
            `https://leg-back.vercel.app/api/v1/updated-task/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    completed: completed,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    }
}
