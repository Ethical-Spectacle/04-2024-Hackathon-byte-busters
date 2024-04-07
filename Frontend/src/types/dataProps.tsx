export interface drawerProps {
    title: string;
    icon: any;
}

export interface clusterRowProps {
    row_id: number
    cooling_type: string
    cluster_level_cooling: any[]
    clusters_status: Status[]
  }
  
  export interface Status {
    cluster_id: number
    cluster_type: string
    cooling_type: string
    rack_level_cooling: any[]
    col_status: Status2[]
  }
  
  export interface Status2 {
    cluster_id: number
    col_id: number
    temperature: number
  }
  export interface TemperatureColorProps {
    threshold: number;
    color: string;
  };