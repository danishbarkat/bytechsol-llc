export interface Service {
  id: string;
  title: string;
}

export const servicesData: Service[] = [];

export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

export const getServiceTitles = (): Array<{ id: string; title: string }> => {
  return servicesData.map(service => ({
    id: service.id,
    title: service.title
  }));
};
