const headers: { [key: string]: string } = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

const HOST = process.env?.REACT_APP_API;

export async function FetchAPI<T, TError = any>(
	method: "GET" | "POST" | "PUT" | "DELETE",
	input: string,
	body?: {}
) {
	try {
		const url = new URL("/api" + input, HOST);

		const res = await fetch(url.toJSON(), {
			method,
			headers,
			mode: "cors",
			credentials: "include",
			...(method != "GET" && body
				? { body: JSON.stringify(body) }
				: {}),
		});
          if(res.ok) {
               try {
                    const data = await res.json();
                    if(data.success) return [undefined, data as any as T]
                    return [Object.assign(new Error(data.message)), data as any as T];
               } catch (error) {
                    
               }
          }
	} catch (err) {
		return [err, null as any];
	}
}
