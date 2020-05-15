export class UpdateOCCFileSettings {
  environment!: string;
  widgetName!: string;
  DCUPath!: string;
  OCCRootPath!: string;
  platform!: string;

  constructor(json?: any) {
    if (json !== null) {
      this.environment = json.environment;
      this.widgetName = json.widgetName;
      this.DCUPath = json.DCUPath;
      this.OCCRootPath = json.OCCRootPath;
      this.platform = json.platform;
    }
  }
}