---
title: "Vmware Vsan"
# date: "2019-06-04"
image: "/images/integrations/vmware_vsan.png"
---

 

<!-- ![Vmware Vsan](/images/integrations/vmware_vsan.png) -->



[VMware VSAN](https://www.vmware.com/uk/products/vsan.html) is gaining more and more customer traction because of its great VMware management integration and simplicity. Nevertheless, like any storage system is it highly important to monitor the most common data distribution and performance metrics of vSAN, to get the full picture and troubleshoot potential issues. The correlation of events and metrics of VMs running on vSAN and the ESXi hosts connectivity is key and extremely simple using our preconfigured dashboards.


![vsan](/images/integrations/posts//navigation-1.png)


Our new VMware vSAN extension has been rewritten from scratch to perform better, autodetect a vSAN through the VMware vCenter connection and support the latest metrics available with vSAN 6.7.


## Some of our vSAN integration features are:

* Monitor the most important metrics better than using vSAN Observer
* Check vSAN data distribution and balance across all vSAN hosts
* Find Disk I/O bottlenecks
* Report Used Capacity over time and plan future capacity
* Full insights into Datastore Latency and VM Disk IOps
* Get a complete usage and performance overview across multiple vSAN systems
* Correlate vSAN and vSphere Host/VM metrics
* Support for multiple vCenter, vSAN, Cluster using one single appliance


![VMware vSAN monitor](/images/integrations/posts//monitor.png)


Our VMware vSAN Monitor dashboards helps to get all kind of metrics in a nice and simple overview.

The data collection stores historic data up to several years depending on your configuration and runs independent from VMware vCenter once the data is collected.

## Data shown / per vSAN Layer:

* Current capacity usage by object types (checksum, filesystem, namespace, * vdisk, vmswap, …)
* Current capacity usage by usage type (overhead, physical, primary capacity, * Reservedcapacity and more)
* Latency
* IOPs
* Bandwidth
* Congestion
* Outstanding I/O
* Read Cache Hit rate
* ESXi vSAN host disk usage
* ESXi vSAN host cpu usage
* vSAN Worldlets CPU usage
* vSAN Worldlets CPU ready %
* vSAN Daemon memory usage


![VMware vSAN capacity](/images/integrations/posts//capacity.png)


VMware vSAN Capacity and Balance dashboard shows the data distribution between the different ESXi hosts that are part of the vSAN.

## Data shown per ESXi host:

* Disk usage
* maximum disk usage
* \# of active components
* \# of I/O components
* \# of Domain owners
* \# of Domain clients
* \# of Domain colocation


![VMware vSAN virtual machine view](/images/integrations/posts//vmview.png)


The VMware vSAN VM View dashboard focus the virtual machine and its read latency, write latency, read and write IOps as well as the bandwidth and IO congestion. You can select the vSAN node or the virtual machine to get all details needed to troubleshoot single systems.
There are much more dashboards and metrics that we collect to present the capacity and performance metrics in our highly efficient and task-focused way.
If you run VMware vSAN, you must test our integration out and see yourself. You can start a free, unlimited trial for 15 days without registration (or 30 days with registration), so there is really no excuse to stay in the dark when it comes to detailed VMware vSphere and VMware vSAN performance.
 