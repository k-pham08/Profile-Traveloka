import {action, makeObservable, observable} from "mobx";
import {Service} from "../models/Service";

export class BaseStore {
	constructor() {
		makeObservable(this);
	}

	@observable
	services: Service[] = new Array<Service>();

	@observable
	types: string[] = new Array<string>();

	@action set_services(v: Service[]) {
		this.services = v;
	}
}
