// const { google } = require('googleapis');
// const compute = google.compute('v1');

// const listVMs = async () => {
//   const authClient = await google.auth.getClient({
//     scopes: [
//       'https://www.googleapis.com/auth/cloud-platform',
//       'https://www.googleapis.com/auth/compute',
//       'https://www.googleapis.com/auth/compute.readonly',
//     ],
//   });

//   const projectId = await google.auth.getProjectId();
//   const result = await compute.instances.aggregatedList({
//     auth: authClient,
//     project: projectId,
//   });
//   const vms = result.data;
//   console.log('VMs:', vms);
// }

// export default listVMs
