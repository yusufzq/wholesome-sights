import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as UUID } from 'uuid';

@Component({
	selector: 'WS-upLoad',
	templateUrl: './upLoad.component.html',
	styleUrls: ['./upLoad.component.css']
})
export class UpLoadComponent {
	constructor(private storage: AngularFireStorage) {};

	draggedOver = false;
	file: File | null = null;
	nextStep = false;

	title = new FormControl('', {
		validators: [Validators.required, Validators.minLength(3)],
		nonNullable: true
	});
	form = new FormGroup({title: this.title});

	pending = false;
	showBanner = false;
	bannerMessage = 'UpLoad in Progress';
	bannerColour = 'blue';

	upLoad(event: DragEvent) {
		this.draggedOver = false;
		this.file = event.dataTransfer?.files.item(0) ?? null;

		if (!(this.file) || this.file.type !== 'video/mp4') return;

		this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
		this.nextStep = true;
	};

	submit() {
		this.pending = true;
		this.showBanner = true;
		this.bannerMessage = 'UpLoad in Progress';
		this.bannerColour = 'blue';

		const fileName = `${this.file!.name}-${UUID()}`;

		this.storage.upload(`sights/${fileName}`, this.file);
	};
};